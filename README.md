# Buto-Plugin-InputRange
Transfere input type text to range.
Handle if user want to empty the value.
Possible values could then be for exampel 1-100 or empty.

## widget_include
Include widget on page.
```
type: widget
data:
  plugin: 'input/range'
  method: include
```

## Element
```
-
  type: form
  innerHTML:
    -
      type: div
      attribute:
        class: form-group
      innerHTML:
        -
          type: label
          attribute:
            for: frm_age
            class: form-label
          innerHTML: 'Age'
        -
          type: input
          attribute:
            type: text
            class: form-range form-control
            min: '0'
            max: '100'
            value: '33'
            id: frm_age
        -
          type: script
          innerHTML: PluginInputRange.init('frm_age')
```

## Javascript
Use init metod with id of input element.
```
PluginInputRange.init('_my_input_type_text_');
```
