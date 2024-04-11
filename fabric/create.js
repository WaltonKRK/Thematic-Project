let canvas = new fabric.Canvas('canvas');

document.getElementById('addRectangle').addEventListener('click', function() {
    let color = document.getElementById('shapeColor').value;
    let rect = new fabric.Rect({
        top : Math.random() * 500,
        left : Math.random() * 500,
        width : 60,
        height : 70,
        fill : color
    });
    canvas.add(rect);
});

document.getElementById('addCircle').addEventListener('click', function() {
    let color = document.getElementById('shapeColor').value;
    let circle = new fabric.Circle({
        top : Math.random() * 500,
        left : Math.random() * 500,
        radius : 30,
        fill : color
    });
    canvas.add(circle);
});

document.getElementById('deleteShape').addEventListener('click', function() {
    let activeObject = canvas.getActiveObject();
    if (activeObject) {
        canvas.remove(activeObject);
    } else {
        alert('Please select an object to delete.');
    }
});
document.getElementById('addText').addEventListener('click', function() {
    let color = document.getElementById('shapeColor').value;
    let fontFamily = document.getElementById('fontType').value;

    let text = new fabric.IText('Tap and Type', {
        left: Math.random() * 500,
        top: Math.random() * 500,
        fontFamily: fontFamily,
        fill: color,
        scaleX: 0.5,
        scaleY: 0.5,
        fontWeight: '',
        originX: 'left',
        hasRotatingPoint: true,
        editable: true
    });

    canvas.add(text);
});
document.getElementById('bgColor').addEventListener('change', function(e) {
    canvas.setBackgroundColor(e.target.value, function() {
        canvas.renderAll();
    });
});

document.getElementById('imageUpload').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function(f) {
        let data = f.target.result;
        fabric.Image.fromURL(data, function(img) {
            let scale = 0.5;

            img.set({
                scaleX: scale,
                scaleY: scale,
                top: (canvas.height - img.height * scale) / 2,
                left: (canvas.width - img.width * scale) / 2,
                selectable: true
            });
            canvas.add(img);
            canvas.renderAll();
        });
    };
    reader.readAsDataURL(file);
});
document.getElementById('happyBirthday').addEventListener('click', function() {
    let text = new fabric.IText('Happy Birthday', {
        left: canvas.width / 2,
        top: 10,
        fontFamily: 'Tangerine',
        fill: '#000000',
        fontSize: 50,
        textAlign: 'center',
        originX: 'center'
    });

    fabric.Image.fromURL('/inc/cake.png', function(img) {
        img.set({
            left: 0,
            top: 0,
            
        });
        canvas.add(img);
        canvas.bringToFront(img);
        canvas.add(text);
    });
});
document.getElementById('congratulations').addEventListener('click', function() {
    let text = new fabric.IText('Congratulations', {
        left: canvas.width / 2,
        top: 10,
        fontFamily: 'Tangerine',
        fill: '#000000',
        fontSize: 50,
        textAlign: 'center',
        originX: 'center'
    });

    fabric.Image.fromURL('/inc/congratulations.png', function(img) {
        img.set({
            left: 0,
            top: 0,
        });
        canvas.add(img);
        canvas.bringToFront(img);
        canvas.add(text);
    });
});
document.getElementById('colorPicker').addEventListener('change', function(e) {
    let activeObject = canvas.getActiveObject();
    if (activeObject) {
        activeObject.set({ fill: e.target.value });
        canvas.renderAll();
    }
});
function downloadImage() {
    var canvas = document.getElementById('canvas'); // replace with your canvas id
    var imgData = canvas.toDataURL('image/png');
    var link = document.createElement('a');
    link.href = imgData;
    link.download = 'CraftyCard.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
/*WebFont.load({
    google: {
        families: ['Roboto', 'Open Sans', 'Lato', 'Oswald', 'Slabo 27px']
    }
});*/