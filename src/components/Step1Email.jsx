function Step1Email({ formData, handleChange, nextStep }) {
  return (
    <div className="step-card">
      <h2>Enter Email:</h2>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="button-group right">
        <button type="button" onClick={nextStep}>
          next
        </button>
      </div>
    </div>
  );
}

export default Step1Email;