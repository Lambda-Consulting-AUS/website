
# converts the logo SVG file into a favicon.ico containing multiple sizes
# requires imagemagick

convert -density 256x256 -background transparent logo-square.svg -define icon:auto-resize -colors 256 favicon.ico
