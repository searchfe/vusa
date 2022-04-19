const san = require('san');

const ItemPanel = san.defineComponent({
    template: `
        <li style="border-color: {{item.category.color}}"
            class="{{item.done ? 'todo-done' : ''}}"
        >
            <slot/>
        </li>
    `
});

const MyComponent = san.defineComponent({
    components: {
        'p-item': ItemPanel
    },
    template: `
<div class="todos">
    <a href="#/add" class="todo-add"><i class="fa fa-plus-square"></i></a>
    <ul class="filter-category">
        <li
            san-for="item in categories"
            style="background: {{item.color}}"
        >
            <a href="/todos/category/{{ item.id }}">{{ item.title }}</a>
        </li>
    </ul>

    <ul class="todo-list">
        <p-item item="{{item}}" s-for="item, index in todos">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <div class="todo-meta">
                <span san-if="item.category">{{ item.category.title }} | </span>
            </div>
            <a class="fa fa-pencil" href="/edit/{{ item.id }}"></a>
            <i class="fa fa-check" on-click="doneTodo(index)"></i>
            <i class="fa fa-trash-o" on-click="rmTodo(index)"></i>
        </p-item>
    </ul>
</div>
    `
});

module.exports = {
    MyComponent
};
