import React, { useState } from 'react';

interface Props {editing: boolean;

imageUrl: string | null;
setImageUrl: (imageUrl: string | null) => void;
}

const ImageSelector: React.FC<Props> = ({editing, imageUrl, setImageUrl} : Props) => {
    

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const imageFile = e.target.files?.[0];
        if (!imageFile) {
            return;
        }
        const imageUrl = URL.createObjectURL(imageFile);
        setImageUrl(imageUrl);
    };

    return (
        <div>
            {editing && <input type="file" accept="image/*" onChange={handleImageChange} />}
            {imageUrl && (
                <div>
                    <img
                        className='h-20 w-20 object-cover'
                        src={imageUrl}
                        alt="Selected Image"
                        style={{ clipPath: 'circle(50%)' }}
                    />
                </div>
            )}
        </div>
    );
    
}

export default ImageSelector;