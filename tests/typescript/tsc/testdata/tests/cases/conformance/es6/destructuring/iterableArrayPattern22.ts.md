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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 9
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 5,
                "end": 9
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 15,
                  "end": 16
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 18,
                  "end": 20
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 15,
                "end": 20
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 22,
                  "end": 23
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 25,
                  "end": 29
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 22,
                "end": 29
              }
            ],
            "start": 13,
            "end": 31
          },
          "definite": false,
          "start": 4,
          "end": 31
        }
      ],
      "declare": false,
      "start": 0,
      "end": 32
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 32
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
    "type": "Punctuator",
    "value": "[",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 5,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "String",
    "value": "\"\"",
    "start": 18,
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
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  }
]
```
