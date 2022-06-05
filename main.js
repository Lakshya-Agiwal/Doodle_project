var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var i = 0;
array_1 = ["aircraft carrier", "airplane", "alarm clock", "ambulance", "angel", "animal migration", "ant", "anvil", "apple", "arm", "asparagus", "axe", "backpack", "banana", "bandage", "barn", "baseball", "baseball bat", "basket", "basketball", "bat", "bathtub", "beach", "bear", "beard", "bed", "bee", "belt", "bench", "bicycle", "binoculars", "bird", "birthday cake", "blackberry", "blueberry", "book", "boomerang", "bottlecap", "bowtie", "bracelet", "brain", "bread", "bridge", "broccoli", "broom", "bucket", "bulldozer", "bus", "bush", "butterfly", "cactus", "cake", "calculator", "calendar", "camel", "camera", "camouflage", "campfire", "candle", "cannon", "canoe", "car", "carrot", "castle", "cat", "ceiling fan", "cello", "cell phone", "chair", "chandelier", "church", "circle", "clarinet", "clock", "cloud", "coffee cup", "compass", "computer", "cookie", "cooler", "couch", "cow", "crab", "crayon", "crocodile", "crown", "cruise ship", "cup", "diamond", "dishwasher", "diving board", "dog", "dolphin", "donut", "door", "dragon", "dresser", "drill", "drums", "duck", "dumbbell", "ear", "elbow", "elephant", "envelope", "eraser", "eye", "eyeglasses", "face", "fan", "feather", "fence", "finger", "fire hydrant", "fireplace", "firetruck", "fish", "flamingo", "flashlight", "flip flops", "floor lamp", "flower", "flying saucer", "foot", "fork", "frog", "frying pan", "garden", "garden hose", "giraffe", "goatee", "golf club", "grapes", "grass", "guitar", "hamburger", "hammer", "hand", "harp", "hat", "headphones", "hedgehog", "helicopter", "helmet", "hexagon", "hockey puck", "hockey stick", "horse", "hospital", "hot air balloon", "hot dog", "hot tub", "hourglass", "house", "house plant", "hurricane", "ice cream", "jacket", "jail", "kangaroo", "key", "keyboard", "knee", "knife", "ladder", "lantern", "laptop", "leaf", "leg", "light bulb", "lighter", "lighthouse", "lightning", "line", "lion", "lipstick", "lobster", "lollipop", "mailbox", "map", "marker", "matches", "megaphone", "mermaid", "microphone", "microwave", "monkey", "moon", "mosquito", "motorbike", "mountain", "mouse", "moustache", "mouth", "mug", "mushroom", "nail", "necklace", "nose", "ocean", "octagon", "octopus", "onion", "oven", "owl", "paintbrush", "paint can", "palm tree", "panda", "pants", "paper clip", "parachute", "parrot", "passport", "peanut", "pear", "peas", "pencil", "penguin", "piano", "pickup truck", "picture frame", "pig", "pillow", "pineapple", "pizza", "pliers", "police car", "pond", "pool", "popsicle", "postcard", "potato", "power outlet", "purse", "rabbit", "raccoon", "radio", "rain", "rainbow", "rake", "remote control", "rhinoceros", "rifle", "river", "roller coaster", "rollerskates", "sailboat", "sandwich", "saw", "saxophone", "school bus", "scissors", "scorpion", "screwdriver", "sea turtle", "see saw", "shark", "sheep", "shoe", "shorts", "shovel", "sink", "skateboard", "skull", "skyscraper", "sleeping bag", "smiley face", "snail", "snake", "snorkel", "snowflake", "snowman", "soccer ball", "sock", "speedboat", "spider", "spoon", "spreadsheet", "square", "squiggle", "squirrel", "stairs", "star", "steak", "stereo", "stethoscope", "stitches", "stop sign", "stove", "strawberry", "streetlight", "string bean", "submarine", "suitcase", "sun", "swan", "sweater", "swingset", "sword", "syringe", "table", "teapot", "teddy-bear", "telephone", "television", "tennis racquet", "tent", "The Eiffel Tower", "The Great Wall of China", "The Mona Lisa", "tiger", "toaster", "toe", "toilet", "tooth", "toothbrush", "toothpaste", "tornado", "tractor", "traffic light", "train", "tree", "triangle", "trombone", "truck", "trumpet", "tshirt", "umbrella", "underwear", "van", "vase", "violin", "washing machine", "watermelon", "waterslide", "whale", "wheel", "windmill", "wine bottle", "wine glass", "wristwatch", "yoga", "zebra", "zigzag"]
var Random_Number = Math.floor((Math.random() * array_1.length) + 1);
var Score = 0;
var Element_of_array = array_1[Random_Number];
console.log(Element_of_array);
document.getElementById("span_4").innerHTML = Element_of_array;
var timer_check = "";
var timer_counter = 0;
var drawn_sketch = "1";
var answer_holder = "";
var sketch = "";

function preload() {
    for (i = 1; i <= 2; i++) {
        var Random_Number = Math.floor((Math.random() * array_1.length) + 1);
        var Element_of_array = array_1[Random_Number];
        console.log(Element_of_array);
        document.getElementById("span_40").innerHTML = Element_of_array;
    }
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(618.5, 311);
    background("white");
    clear();
}

function clear() {
    background("white");


    document.getElementById("span_40").innerHTML = Element_of_array;


    sketch = Element_of_array;
}

function draw() {
    check_sketch();


}

function check_sketch() {
    if (drawn_sketch == sketch) {
        Score = Score + 1;
        answer_holder = "Correct";
        document.getElementById("span_3").innerHTML = Score;
        document.getElementById("span_2").innerHTML = answer_holder;

    }


    document.getElementById("span_4").innerHTML = timer_counter;
    if (timer_counter > 500) 
    {
        timer_counter = 0;
        timer_counter++;
        document.getElementById("span_4").innerHTML = timer_counter;
        timer_check = "completed";
        var Random_Number = Math.floor((Math.random() * array_1.length) + 1);
        var Element_of_array = array_1[Random_Number];
        console.log(Element_of_array);
        document.getElementById("span_40").innerHTML = Element_of_array;
    }
    if (answer_holder = "Correct" || (timer_check = "completed")) {
        timer_check = 0;
        timer_counter++;
        document.getElementById("span_4").innerHTML = timer_counter;
        answer_holder = "";
        background("white");
    }

}