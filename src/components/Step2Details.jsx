function Step2Details({ formData, handleChange, nextStep, prevStep }) {
  return (
    <div className="step-card">
      <h2>Enter More Details:</h2>

      <div className="form-group">
        <label>
          name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          age:
          <input
            type="number"
            name="age"
            min="1"
            max="120"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          favorite color:
          <input
            type="color"
            name="favoriteColor"
            value={formData.favoriteColor}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="button-group">
        <button type="button" onClick={prevStep}>
          back
        </button>
        <button type="button" onClick={nextStep}>
          next
        </button>
      </div>
    </div>
  );
}

export default Step2Details;