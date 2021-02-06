import React from 'react';

const signUpForm = ({ handleFormSubmit }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [teacherNickname, setTeacherNickname] = useState("");

const signup = () => {
    return (
        <div className="container">
            <div className = "row">
            <div className="col s10 offset-s1"id ="container">
            <div className="row">
            <form
        className="col s12"
        onSubmit={(e) => {
          handleFormSubmit(e, {
            firstName,
            lastName,
            username
            password,
            teacherNickname,
          });
        }}
      >
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Product Title"
              id="title"
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label htmlFor="title">Product Title</label>
          </div>
          <div className="input-field col s6">
            <input
              placeholder="Product Price"
              id="price"
              type="text"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <label htmlFor="price">Product Price</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Product Description"
              id="description"
              type="text"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <label htmlFor="description">Product Description</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Product Image"
              id="imageURL"
              type="text"
              name="imageURL"
              value={imageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
            />
            <label htmlFor="imageURL">Product Image</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Product Category"
              id="category"
              type="text"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <label htmlFor="category">Product Category</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Product Quantity"
              id="quantity"
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <label htmlFor="quantity">Product Quantity</label>
          </div>
          <div className="input-field col s6">
            <label>
              <input
                type="checkbox"
                checked={featured}
                onChange={() => {
                  setFeatured(!featured);
                }}
              />
              <span>Featured?</span>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button className="waves-effect waves-light btn">
              Create New Product
            </button>
          </div>
        </div>
      </form>
            </div>
            </div>
            </div>
        </div>
            
        
    );
};

export default signup;