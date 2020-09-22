const assetSections = document.getElementsByClassName('asset-section')
let assets = []

for (let i = 0; i < assetSections.length; i++) {
  assets.push(assetSections[i])
}

let seasonSelection = 's3'

const seasonRadio = document.getElementsByName('season')
for (let i = 0; i < seasonRadio.length; i++) {
  seasonRadio[i].onchange = () => {
    console.log('change')
    updateFilter(seasonRadio[i].value)
  }
}

const updateFilter = (season = seasonSelection) => {
  seasonSelection = season
  assets.forEach(asset => {
    if (seasonSelection === 'all' || !asset.dataset.season || asset.dataset.season === seasonSelection) {
      asset.classList.add('show')
    } else {
      asset.classList.remove('show')
    }
  })
}

updateFilter()