# How to use the menu component
### You can implement some extra props in the example below, like authorization values

There is no complete menu, but there are MenuItem and SubMenuItem components.<br/>
With those 2 elements you can build a menu like described below.<br />
In the stories file, you'll find a nice working example of how to deal with expanded/selected props.

**Menu definition example**:

```jsx
export const menuItems = [
    {
        children: [],
        exact: true,
        iconType: ICON_TYPES.WORLD,
        path: '/',
        text: 'Home',
    },
    {
        children: [],
        iconType: ICON_TYPES.SHIRT,
        path: '/toernooi',
        text: 'Toernooi met een extreem lange titel',
    },
    {
        children: [],
        iconType: ICON_TYPES.SHIELD,
        isDisabled: true,
        path: '/club',
        text: 'Club',
    },
    {
        children: [
            {
                isDisabled: true,
                path: '/wedstrijden/kleedkamers',
                text: 'Kleedkamers die zo lang zijn dat je er niet eens op kan drukken',
            },
            {
                path: '/wedstrijden/velden',
                text: 'Velden',
            },
        ],
        iconType: ICON_TYPES.MATCHOWN,
        path: '/wedstrijden',
        text: 'Wedstrijden',
    },
    {
        children: [
            {
                path: '/competitie/teams',
                text: 'Teams',
            },
            {
                path: '/competitie/officials',
                text: 'Officials',
            },
        ],
        iconType: ICON_TYPES.LIGHTBULB,
        path: '/competitie',
        text: 'Competitie',
    },
];
```
