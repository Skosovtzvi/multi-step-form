function Step3Referral({ formData, handleChange, prevStep, handleFinish }) {
  return (
    <div className="step-card">
      <h2>How Did You Find Us?</h2>

      <div className="form-group">
        <label>
          pick:
          <select
            name="referral"
            value={formData.referral}
            onChange={handleChange}
          >
            <option value="" disabled>
              -- select option --
            </option>
            <option value="online">online</option>
            <option value="social networks">social networks</option>
            <option value="ads">ads</option>
            <option value="friends">friends</option>
            <option value="other">other</option>
          </select>
        </label>
      </div>

      {formData.referral === 'other' && (
        <div className="form-group">
          <label>
            expand:
            <input
              type="text"
              name="expand"
              value={formData.expand}
              onChange={handleChange}
            />
          </label>
        </div>
      )}

      <div className="button-group">
        <button type="button" onClick={prevStep}>
          back
        </button>
        <button type="button" onClick={handleFinish}>
          finish
        </button>
      </div>
    </div>
  );
}

export default Step3Referral;