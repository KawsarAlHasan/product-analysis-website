import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center'>
            <p className='font-semibold text-xl'>Answer to the Question No.1</p>
            <p className='font-medium'>Ans: If a child component at nth level require a property from a parent component at <br />
            any level, the information needs to be passed one level by level through props. In an <br />
            application with lot of nested components, it is difficult.<br /> 
            Context API helps to directly send an information from a parent component to a child <br />
            component at any level.</p>

            <p className='font-semibold text-xl mt-5'>Answer to the Question No.2</p>
            <p className='font-medium'>Ans: Semantic HTML or semantic markup is HTML that introduces meaning to the web <br />
            page rather than just presentation. For example, a "p" tag indicates that the enclosed <br /> 
            text is a paragraph. This is both semantic and presentational because people know what <br /> 
            paragraphs are, and browsers know how to display them. On the flip side of this equation, <br /> 
            tags such as "b" and "i" are not semantic. They define only how the text should look <br /> 
            (bold or italic), and don't provide any additional meaning to the markup.</p>
        </div>
    );
};

export default Blogs;