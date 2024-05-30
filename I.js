function upload() {
  handleUpload(0);
}

function upload1() {
  handleUpload(1);
}

function upload2() {
  handleUpload(2);
}

function handleUpload(index) {
  const fileUploadInputs = document.querySelectorAll('.file-uploader');
  const fileUploadInput = fileUploadInputs[index];

  const image = fileUploadInput.files[0];

  if (!image.type.includes('image')) {
      return alert('Only images are allowed!');
  }

  if (image.size > 10_000_000) {
      return alert('Maximum upload size is 10MB!');
  }
  
  const fileReader = new FileReader();
  fileReader.readAsDataURL(image);

  fileReader.onload = (fileReaderEvent) => {
      const profilePicture = document.querySelectorAll('.profile-picture')[index];
      profilePicture.style.backgroundImage =`url(${fileReaderEvent.target.result})` ;
  }
}