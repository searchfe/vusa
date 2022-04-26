import Vue from '../helpers/vue';

it('test ssr render simple template', done => {
    const html = new Vue({
        template: `
            <div>
                <div>{{text}}</div>
            </div>
        `,
        data: {
            text: ''
        },
        __sanOptimizeSSR: true
    }).render({text: '测试渲染'});
    expect(html.replace(/<!--(.|[\r\n])*?-->/g, '')).toBe(
        '<div><div>测试渲染</div></div>'
    );
    done();
});

it('test ssr render $root and $slot', done => {
    const html = new Vue({
        template: `
            <div>
                <div>{{$root.text}}</div>
                <child>
                    <div slot="test">I am the slot dom</div>
                </child>
            </div>
        `,
        data: {},
        components: {
            child: {
                template: `
                    <div>
                        <slot name="test" />
                        <div>{{($slots && $slots.test) ? text : 'child component has a slot'}}</div>
                    </div>
                `,
                data: {
                    text: `child component don't has a slot`
                }
            },
        },
        __sanOptimizeSSR: true
    }).render({$rootData: {text:`parent component text`}}, {});
    expect(html.replace(/<!--(.|[\r\n])*?-->/g, '')).toBe(
        `<div><div>parent component text</div><div><div>I am the slot dom</div><div>child component has a slot</div></div></div>`
    );
    done();
});

it('test ssr render slots component', done => {
    const html = new Vue({
        template: `
            <div>
                <test>
                    <div slot="first">
                        1
                    </div>
                    <div slot="second">
                        2
                    </div>
                    <div slot="second">
                        2+
                    </div>
                </test>
            </div>
        `,
        data: {
        },
        components: {
            test: {
                template: `
                    <div>
                        <slot name="first"><p>first slot</p></slot>
                        <slot><p>this is the default slot</p></slot>
                        <slot name="second"><p>second named slot</p></slot>
                    </div>
                `
            }
        },
        __sanOptimizeSSR: true
    }).render({});
    expect(html.replace(/<!--(.|[\r\n])*?-->/g, '')).toBe(
        '<div><div><div>1</div><p>this is the default slot</p><div>2</div><div>2+</div></div></div>'
    );
    done();
});
