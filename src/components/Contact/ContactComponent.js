const Contact = () => {

    return (
        <>
            <div className='p-14'>
                <form>
                    <div className='grid grid-rows-4 grid-cols-1'>

                        <div className='relative'>
                            <input type='text'
                                id="fname"
                                name="fname"
                                className='peer 
                                                      h-10 w-full bg-dark-blue 
                                                      border-b-2 border-off-white text-off-white
                                                      focus:outline-none 
                                                      focus:border-accent-color 
                                                      placeholder-dark-blue'
                                placeholder="First Name:"
                            />
                            <label htmlFor='fname'
                                className='absolute 
                                                      left-0 -top-3.5
                                                      text-off-white 
                                                      transition-all
                                                      peer-placeholder-shown:text-gray-400
                                                      peer-placeholder-shown:text-base
                                                      peer-placeholder-shown:top-2
                                                      peer-focus:-top-3.5 peer-focus:text-yellow-200
                                                      '

                            >First Name:</label>
                        </div>


                        <div className='relative'>
                            <input type='text'
                                id="lname"
                                name="lname"
                                className='peer 
                                                      h-10 w-full bg-dark-blue 
                                                      border-b-2 border-off-white text-off-white
                                                      focus:outline-none 
                                                      focus:border-accent-color 
                                                      placeholder-dark-blue'
                                placeholder="Last Name:"
                            />
                            <label htmlFor='lname'
                                className='absolute 
                                                      left-0 -top-3.5
                                                      text-off-white 
                                                      transition-all
                                                      peer-placeholder-shown:text-gray-400
                                                      peer-placeholder-shown:text-base
                                                      peer-placeholder-shown:top-2
                                                      peer-focus:-top-3.5 peer-focus:text-yellow-200
                                                      '

                            >Last Name:</label>
                        </div>
                        <div className='relative'>
                            <input type='email'
                                id="email"
                                name="email"
                                className='peer 
                                                      h-10 w-full bg-dark-blue 
                                                      border-b-2 border-off-white text-off-white
                                                      focus:outline-none 
                                                      focus:border-accent-color 
                                                      placeholder-dark-blue'
                                placeholder="Email:"
                            />
                            <label htmlFor='email'
                                className='absolute 
                                                      left-0 -top-3.5
                                                      text-off-white 
                                                      transition-all
                                                      peer-placeholder-shown:text-gray-400
                                                      peer-placeholder-shown:text-base
                                                      peer-placeholder-shown:top-2
                                                      peer-focus:-top-3.5 peer-focus:text-yellow-200
                                                      '

                            >Email:</label>
                        </div>
                        <div className="relative">
                            <textarea id="message"
                                name="message"
                                rows="4"
                                className="peer
                                      w-full
                                      bg-dark-blue text-off-white
                                      border-b-2 border-off-white
                                      focus:outline-none 
                                                      focus:border-accent-color
                                      placeholder-dark-blue
                                      "
                                placeholder="Message:"
                            >

                            </textarea>
                            <label htmlFor='message'
                                className='absolute 
                                                      left-0 -top-7
                                                      text-off-white 
                                                      transition-all
                                                      peer-placeholder-shown:text-gray-400
                                                      peer-placeholder-shown:text-base
                                                      peer-placeholder-shown:top-2
                                                      peer-focus:-top-7 peer-focus:text-yellow-200
                                                      '

                            >Message:</label>
                        </div>

                        <div className=''>
                            <button className="border-2 border-accent-color py-2 px-4 mt-5 rounded text-accent-color">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact;