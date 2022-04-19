const san = require('san');

const TodoItem = san.defineComponent({
    template: `
        <li style="border-color: {{item.category.color}}"
            class="{{item.done ? 'todo-done' : ''}}"
        >
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <div class="todo-meta">
                <span san-if="item.category">{{ item.category.title }} | </span>
            </div>
            <a class="fa fa-pencil" href="/edit/{{ item.id }}"></a>
            <i class="fa fa-check" on-click="doneTodo(index)"></i>
            <i class="fa fa-trash-o" on-click="rmTodo(index)"></i>
        </li>
    `
});

const MyComponent = san.defineComponent({
    components: {
        'x-item': TodoItem
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
        <x-item item="{{item}}" index="{{index}}" s-for="item, index in todos"/>
    </ul>
</div>
    `
});

module.exports = {
    MyComponent
};
