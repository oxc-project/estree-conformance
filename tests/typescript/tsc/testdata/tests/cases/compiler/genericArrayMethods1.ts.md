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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 6,
                  "end": 12
                },
                "start": 6,
                "end": 14
              },
              "start": 5,
              "end": 14
            },
            "start": 4,
            "end": 14
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 19,
                    "end": 20
                  },
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 21,
                    "end": 22
                  }
                ],
                "start": 18,
                "end": 23
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "slice",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 29
              },
              "optional": false,
              "computed": false,
              "start": 18,
              "end": 29
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 30,
                "end": 31
              }
            ],
            "optional": false,
            "start": 18,
            "end": 32
          },
          "definite": false,
          "start": 4,
          "end": 32
        }
      ],
      "declare": false,
      "start": 0,
      "end": 33
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 60
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
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 18,
    "end": 19
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Numeric",
    "value": "1",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 24,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  }
]
```
