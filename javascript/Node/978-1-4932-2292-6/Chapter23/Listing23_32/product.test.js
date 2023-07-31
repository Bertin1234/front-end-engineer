import product from './product.js';

describe('Product', () => {
  describe('getCategories', () => {
    it('should get categories from JSON', () => {
      const input = [
        {
          id: '800001',
          name: 'Paper Letter',
          category: { id: 1, name: 'Paper', position: '3' },
        },
        {
          id: '90273',
          name: 'Ball pen',
          category: { id: 3, name: 'Stationery', position: '1' },
        },
      ];

      const output = product.getCategories(JSON.stringify(input));

      expect(output).toStrictEqual(['Stationery', 'Paper']);
    });
  });
  it('should get other categories from JSON', () => {
    const input = [
      {
        id: '600320',
        name: 'Radiergummi',
        category: { id: 1, name: 'Accessories', position: '4' },
      },
      {
        id: '90273',
        name: 'Ball pen',
        category: { id: 3, name: 'Stationery', position: '1' },
      },
    ];

    const output = product.getCategories(JSON.stringify(input));

    expect(output).toStrictEqual(['Stationery', 'Accessories']);
  });
});
