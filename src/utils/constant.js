export const TYPE_NAV = {
    "cameras": [
        {
            name: "dslr-camera",
            value: 'DSLR Camera',
        },
        {
            name: "mirrorless-camera",
            value: "Mirrorless Camera"
        },
        {
            name: "compact-camera",
            value: "Compact Camera"
        },
        
    ],
    "cameras-lenses": [
        {
            name: "dslr-lenses",
            value: "DSLR Lenses"
        },
        {
            name: "mirrorless-lenses",
            value: "Mirrorless Lenses"
        },
        {
            name: "medium-lenses",
            value: "Medium Format Lenses"
        },
    ],
    "pro-audio": [
        {
            name: "hi-end-sound",
            value: "Hi-end Sound"
        },
        {
            name: "hi-fi-sound",
            value: "Hi-Fi Sound"
        },
        {
            name:  "audio-accessories",
            value: "Audio Accessories"
        },
    ],
    "memory-cards-camera-film": [
        {
            name: "memory-cards",
            value: "Memory Cards"
        },
        {
            name:  "camera-film",
            value: "Camera Film"
        },
    ],
    "accessories": [
        {
            name:  "tripods-support",
            value: "Tripods & Supports"
        },
        {
            name:  "lighting-studio",
            value: "Lighting & Studio"
        },
        {
            name:  "camera-bag-and-cases",
            value: "Camera bags & Cases"
        },
        {
            name:  "miscellaneous-accessories",
            value: "Miscellaneous Accessories"
        },
    ]
};


export function formatString(inputString) {
    // Remove hyphens and split the string into words
    const words = inputString.split('-');
  
    // Capitalize the first character of each word and join with a space
    const formattedString = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  
    return formattedString;
  }