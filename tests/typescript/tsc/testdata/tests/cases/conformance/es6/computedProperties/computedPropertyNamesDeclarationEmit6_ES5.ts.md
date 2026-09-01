__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 14,
                    "end": 15
                  },
                  "prefix": true,
                  "start": 13,
                  "end": 15
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 18,
                  "end": 20
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 12,
                "end": 20
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "UnaryExpression",
                  "operator": "+",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 26,
                    "end": 27
                  },
                  "prefix": true,
                  "start": 25,
                  "end": 27
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 30,
                  "end": 32
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 24,
                "end": 32
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "UnaryExpression",
                  "operator": "~",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 38,
                    "end": 39
                  },
                  "prefix": true,
                  "start": 37,
                  "end": 39
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 42,
                  "end": 44
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 36,
                "end": 44
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 50,
                    "end": 51
                  },
                  "prefix": true,
                  "start": 49,
                  "end": 51
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 54,
                  "end": 56
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 48,
                "end": 56
              }
            ],
            "start": 8,
            "end": 58
          },
          "definite": false,
          "start": 4,
          "end": 58
        }
      ],
      "declare": false,
      "start": 0,
      "end": 58
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 58
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 13,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 25,
    "end": 26
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 37,
    "end": 38
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 49,
    "end": 50
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  }
]
```
