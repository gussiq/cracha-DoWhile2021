const LinksSocialMedia = {
  github: 'gussiq',
  youtube: 'channel/UCt9pPFLFUYB35E1aikKzVHA',
  facebook: 'gustavo.siqueira.752',
  instagram: 'gusiqueiiraa',
  twitter: 'sicgusta'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio

      UserImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()
