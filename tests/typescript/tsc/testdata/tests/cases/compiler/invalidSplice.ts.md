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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 10,
                "end": 12
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "splice",
                "optional": false,
                "typeAnnotation": null,
                "start": 13,
                "end": 19
              },
              "optional": false,
              "computed": false,
              "start": 10,
              "end": 19
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 20,
                "end": 21
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 22,
                "end": 23
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 24,
                "end": 25
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 26,
                "end": 27
              }
            ],
            "optional": false,
            "start": 10,
            "end": 28
          },
          "definite": false,
          "start": 4,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 29
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
    "value": "arr",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "splice",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 21,
    "end": 22
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 23,
    "end": 24
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  }
]
```
