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
    "cameras-lens": [
        {
            name: "dslr-lens",
            value: "DSLR Lens"
        },
        {
            name: "mirrorless-lens",
            value: "Mirrorless Lens"
        },
        {
            name: "medium-lens",
            value: "Medium Format Lens"
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