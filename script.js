const PI = 3.14;
let radius = 6378e6;
var circumference = 2 * PI * radius;
var surfaceArea = 4 * PI * radius * radius;
var volume = (4/3) * PI * radius * radius * radius;



document.write ( 'The radius of the sphere is' + ' ' + radius + '.');
document.write ( '<br>' );

document.write ( 'The circumference is' + ' ' + circumference + '.');
document.write ( '<br>' );

document.write ( 'The surface area is' + ' ' + surfaceArea + '.');
document.write ( '<br>' );

document.write ( 'The volume is' + ' ' + volume + '.');
document.write ( '<br>' );