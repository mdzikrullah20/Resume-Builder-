document.getElementById('resumeForm').addEventListener('submit',function(e){
    e.preventDefault()

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;

   const resumOutput = `
     <h2>${name}</h2>
     <p>Email: ${email}</p>
     <P>Phone: ${phone}</p>
     <h4>Summary</h3>
     <p>${summary}</p>
`;

document.getElementById('resumeOutput').innerHTML = resumOutput;
});

