function getCoins() {
  return parseInt(localStorage.getItem('coins') || '0');
}

function setCoins(n) {
  localStorage.setItem('coins', n);
  updateCoinDisplay();
}

function addCoins(n) {
  setCoins(getCoins() + n);
}

function spendCoins(n) {
  if (getCoins() >= n) {
    setCoins(getCoins() - n);
    return true;
  } else {
    alert("硬币不足！");
    return false;
  }
}

function updateCoinDisplay() {
  const spans = document.querySelectorAll("#coin-count");
  spans.forEach(el => el.textContent = getCoins());
}

function earnCoins() {
  const earned = Math.floor(Math.random() * 5) + 1;
  addCoins(earned);
  const log = document.getElementById("game-log");
  if (log) log.textContent = `你赚到了 ${earned} 个硬币！`;
}

function generateRewardCode() {
  const code = 'CLJA-' + Math.floor(1000 + Math.random() * 9000);
  const coins = getCoins();
  localStorage.setItem('reward-' + code, coins);
  document.getElementById('reward-code-display').textContent = `兑换码：${code}（记得保存）`;
}

window.addEventListener("DOMContentLoaded", updateCoinDisplay);
