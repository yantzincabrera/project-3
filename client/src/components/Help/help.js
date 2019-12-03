import React from 'react';
import './help.css';


export const Help = props => {
    return (
<div>
<div className="Card">
<div className="card-body">
        <h5 className="Card-title">Better Help</h5>
        <h6 className="card-subtitle mb-2 text-muted">Speak with a professional</h6>
        <p className="card-text">Making professional counseling accessible, affordable, convenient - so anyone who struggles with life’s challenges can get help, anytime, anywhere.</p>
        <a href="https://www.betterhelp.com/start/?help_with=Grief" className="card-link">Go to BetterHelp.com</a>
  </div>
</div>

<div className="Card">
<div className="Card-body">
        <h5 className="Card-title">GoFund Me</h5>
        <h6 className="Card-subtitle mb-2 text-muted">Seeking Financial Help?</h6>
        <p className="card-text">With a free GoFundMe, you can get immediate help with memorial costs.</p>
        <a href="https://www.gofundme.com/start/memorial-fundraising" className="card-link">Go to GoFundme.com</a>
  </div>
</div>

<div className="Card">
<div className="Card-body">
        <h5 className="Card-title">Suicide Prevention LifeLine</h5>
        <h6 className="Card-subtitle mb-2 text-muted">There is always hope</h6>
        <p className="Card-text">The National Suicide Prevention Lifeline is a national network of local crisis centers that provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week.</p>
        <a href="https://suicidepreventionlifeline.org/" className="Card-link">Go to SuicidePreventionLifeLine.org</a>
  </div>
</div>

<div className="Card">
<div className="Card-body">
        <h5 className="Card-title">Additional Resources</h5>
        <h6 className="Card-subtitle mb-2 text-muted">Seeking Financial Help?</h6>
        <p className="card-text">Videos to make sense of it all</p>
        <a href="https://grief.com/about-grief/" className="card-link">Go to Grief.com</a>
  </div>
</div>

        </div>
    );
}