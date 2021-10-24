class Restaurant < ApplicationRecord
  has_many :foods
  has_many :line_foods, through: :foods

  validates :name, :fee, :time_required, presence: true #必須
  validates :name, length: { maximum: 30 } #最大30文字
  validates :fee, numericality: { grater_than: 0 } #数値0以上
end
