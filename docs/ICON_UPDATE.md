# Documentation used for updating the ICON in Sportlink UI kit

Below are the steps / rules to be followed to update icon in UI KIT:
- Navigate to the root of this project.
- Inside the public/fonts/iconfont folder, place the new *.eot, *.woff, *.ttf and *.svg files.
- In the src/app/styles/fonts/iconfont path, replace the `Selection.json` file with new given one with the same name.
- In the src/app/styles/fonts/iconfont path, replace the `iconfont.css` file with the new given one (named style.css) with the same name.
- In `iconfont.css` make sure to replace the path `font/` with `~fonts/iconfont/`. Very important part for the building process!
- Run the `npm run build:iconTypes` command to generate the new set of IconTypes.
- Replace the `IconType` enum with new set of generated values in the `src\app\types.ts` file.
- That's all

