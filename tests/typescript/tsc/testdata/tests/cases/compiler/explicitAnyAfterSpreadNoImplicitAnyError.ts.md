__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3,
              "end": 4
            },
            "value": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 6,
              "end": 8
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3,
            "end": 8
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 14,
                "end": 18
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 22,
                "end": 25
              },
              "start": 14,
              "end": 25
            },
            "start": 10,
            "end": 26
          }
        ],
        "start": 1,
        "end": 28
      },
      "directive": null,
      "start": 0,
      "end": 30
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
              },
              "start": 36,
              "end": 41
            },
            "start": 35,
            "end": 41
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 41
        }
      ],
      "declare": false,
      "start": 31,
      "end": 42
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 42
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "(",
    "start": 0,
    "end": 1
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1,
    "end": 2
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Null",
    "value": "null",
    "start": 14,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 19,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  }
]
```
