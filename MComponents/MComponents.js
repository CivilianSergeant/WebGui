var MComponent = (function () {
    function MComponent() {
        this.unit = "px";
        this.id = null;
        this.cssClass = null;
    }
    MComponent.prototype.getCssClass = function () {
        return this.cssClass;
    };
    MComponent.prototype.getElement = function () {
        var documentHTMLElement = document.getElementById(this.id);
        if (documentHTMLElement != null) {
            this.htmlElement = document.getElementById(this.id);
        }
        return this.htmlElement;
    };
    MComponent.prototype.getId = function () {
        return this.id;
    };
    MComponent.prototype.setId = function (id) {
        this.id = id;
    };
    return MComponent;
})();
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MTitleBar = (function (_super) {
    __extends(MTitleBar, _super);
    function MTitleBar(context, textLabel) {
        _super.call(this);
        this.context = null;
        this.textLabel = null;
        this.context = context;
        this.cssClass = 'title-bar';
        this.id = context.getId() + "-" + this.cssClass;
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute("id", this.id);
        this.htmlElement.setAttribute("class", this.cssClass);
        if (textLabel) {
            this.textLabel = textLabel;
            this.htmlElement.appendChild(textLabel.getElement());
        }
    }
    MTitleBar.prototype.setTextLabel = function (textLabel) {
        this.textLabel = textLabel;
        this.htmlElement.appendChild(textLabel.getElement());
    };
    MTitleBar.prototype.setText = function (text) {
        if (this.textLabel != null) {
            this.textLabel.setText(text);
        }
    };
    MTitleBar.prototype.getText = function () {
        if (this.textLabel != null) {
            return this.textLabel.getText();
        }
        return null;
    };
    return MTitleBar;
})(MComponent);
var MTextLabel = (function (_super) {
    __extends(MTextLabel, _super);
    function MTextLabel(value, type, context) {
        _super.call(this);
        this.value = null;
        this.type = null;
        this.context = null;
        this.context = context;
        this.cssClass = 'text-label';
        this.id = (context != undefined) ? context.getId() + "-" + this.cssClass : this.cssClass;
        this.value = value;
        this.type = type;
        this.htmlElement = document.createElement(type);
        this.htmlElement.setAttribute("id", this.id);
        this.htmlElement.setAttribute("class", this.cssClass);
        this.htmlElement.innerHTML = this.value;
    }
    MTextLabel.prototype.getText = function () {
        return this.value;
    };
    MTextLabel.prototype.setText = function (value) {
        this.value = value;
        this.getElement();
        this.htmlElement.innerHTML = value;
    };
    return MTextLabel;
})(MComponent);
var MTextField = (function (_super) {
    __extends(MTextField, _super);
    function MTextField(placeholder, value, context) {
        _super.call(this);
        this.context = null;
        this.value = null;
        this.context = context;
        this.cssClass = 'text-field';
        this.id = (context) ? context.getId() + "-" + this.cssClass : this.cssClass;
        this.htmlElement = document.createElement('input');
        this.htmlElement.setAttribute("id", this.id);
        this.htmlElement.setAttribute("class", this.cssClass);
        this.htmlElement.setAttribute("type", "text");
        this.htmlElement.setAttribute("placeholder", placeholder);
        if (value) {
            this.value = value;
            this.htmlElement.setAttribute("value", value);
        }
    }
    MTextField.prototype.setOnChangeListener = function (itemChanged) {
        this.htmlElement = document.getElementById(this.id);
        this.htmlElement.addEventListener("keyup", itemChanged, false);
    };
    return MTextField;
})(MComponent);
var MContainer = (function (_super) {
    __extends(MContainer, _super);
    function MContainer(context) {
        _super.call(this);
        this.components = [];
        this.context = null;
        this.layout = null;
        this.context = context;
        this.cssClass = 'container';
        this.id = (context) ? context.getId() + "-" + this.cssClass : this.cssClass;
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute("id", this.id);
        this.htmlElement.setAttribute("class", this.cssClass);
    }
    MContainer.prototype.add = function (component, layoutPosition) {
        this.getElement();
        this.components.push(component);
        this.addComponents();
    };
    MContainer.prototype.addComponents = function () {
        if (this.components.length > 0) {
            if (this.htmlElement != undefined) {
                for (var c in this.components) {
                    var component = this.components[c];
                    this.appendChild(component, c);
                }
            }
        }
    };
    MContainer.prototype.appendChild = function (component, index) {
        if (index) {
            var id = component.getId().toLowerCase();
            var i = (parseInt(index) + 1);
            var idSections = id.split('-');
            var index = (idSections.length - 1);
            var pattern = /^\d$/;
            if (!pattern.test(idSections[index])) {
                var newId = id + "-" + i;
                component.setId(newId);
                component.getElement().setAttribute("id", newId);
            }
        }
        if (this.layout != null) {
            this.layout.add(component);
        }
        else {
            this.htmlElement.appendChild(component.getElement());
        }
    };
    MContainer.prototype.setLayout = function (layout) {
        this.layout = layout;
        this.htmlElement.appendChild(this.layout.getElement());
    };
    return MContainer;
})(MComponent);
var MPanel = (function (_super) {
    __extends(MPanel, _super);
    function MPanel(id, context) {
        _super.call(this);
        this.container = null;
        this.context = null;
        this.titleBar = null;
        this.context = context;
        this.cssClass = "panel";
        this.id = (context) ? context.getId() + "-" + this.cssClass : this.cssClass;
        var textLabel = new MTextLabel("Title Bar", "h3", this);
        this.titleBar = new MTitleBar(this, textLabel);
        this.container = new MContainer(this);
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute("id", this.id);
        this.htmlElement.setAttribute("class", this.cssClass);
        this.htmlElement.appendChild(this.titleBar.getElement());
        this.htmlElement.appendChild(this.container.getElement());
    }
    MPanel.prototype.add = function (component, layoutPosition) {
        this.getElement();
        if (layoutPosition != null) {
            this.container.add(component, layoutPosition);
        }
        else {
            this.container.add(component);
        }
    };
    MPanel.prototype.getContainer = function () {
        return this.container;
    };
    MPanel.prototype.getTitleBar = function () {
        return this.titleBar;
    };
    MPanel.prototype.removeTitleBar = function () {
        this.titleBar.getElement().remove();
    };
    MPanel.prototype.setLayout = function (layout) {
        this.container.setLayout(layout);
    };
    MPanel.prototype.setTitleBar = function (titleBar) {
        this.htmlElement.insertBefore(titleBar.getElement(), this.container.getElement());
    };
    MPanel.prototype.setTitleBarText = function (text) {
        this.titleBar.setText(text);
    };
    MPanel.prototype.show = function () {
        document.write(this.htmlElement.outerHTML);
    };
    return MPanel;
})(MComponent);
var MLayout = (function (_super) {
    __extends(MLayout, _super);
    function MLayout() {
        _super.call(this);
        this.cssClass = 'layout';
        this.id = this.cssClass;
        this.components = [];
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute("id", this.id);
        this.htmlElement.setAttribute("class", this.cssClass);
    }
    MLayout.prototype.add = function (component, align) {
        this.getElement();
        this.components.push(component);
        this.renderComponents();
    };
    MLayout.prototype.appendChild = function (component, index) {
        if (index) {
            var id = component.getId().toLowerCase();
            var i = (parseInt(index) + 1);
            var idSections = id.split('-');
            var x = (idSections.length - 1);
            var pattern = /^\d$/;
            if (!pattern.test(idSections[index])) {
                var newId = id + "-" + i;
                component.setId(newId);
                component.getElement().setAttribute("id", newId);
            }
        }
        this.htmlElement.appendChild(component.getElement());
    };
    MLayout.prototype.renderComponents = function () {
        if (this.components.length > 0) {
            if (this.htmlElement != undefined) {
                for (var c in this.components) {
                    var component = this.components[c];
                    this.appendChild(component, c);
                }
            }
        }
    };
    return MLayout;
})(MComponent);
var MFlowLayout = (function (_super) {
    __extends(MFlowLayout, _super);
    function MFlowLayout() {
        _super.call(this);
        this.cssClass = 'fl-layout';
        this.htmlElement.setAttribute("class", this.cssClass);
    }
    return MFlowLayout;
})(MLayout);
