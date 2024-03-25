import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void,
}

export default class ListTemplate implements DOMList {

    ul: HTMLUListElement

    static instance: ListTemplate = new ListTemplate()


    private constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = ""
    }

    render(fullList: FullList): void {
        this.clear()

        fullList.list.forEach(item => {
            // LIST ITEM
            const li = document.createElement("li") as HTMLLIElement
            li.classList.add("item")
            
            // CHECKBOX
            const checkbox = document.createElement("input") as HTMLInputElement
            checkbox.type = "checkbox"
            checkbox.id = item.id
            checkbox.checked = item.checked
            li.appendChild(checkbox)

            checkbox.addEventListener("change", () => {
                item.checked = !item.checked
                fullList.save()
            })

            // LABEL
            const label = document.createElement("label") as HTMLLabelElement
            label.htmlFor = item.id
            label.textContent = item.item
            li.appendChild(label)

            // DELETE BUTTON
            const button = document.createElement("button") as HTMLButtonElement
            button.classList.add("button")
            button.textContent = "X"
            li.appendChild(button)

            button.addEventListener("click", () => {
                fullList.removeItem(item.id)
                this.render(fullList)
            })

            this.ul.appendChild(li)
        })
    }

}