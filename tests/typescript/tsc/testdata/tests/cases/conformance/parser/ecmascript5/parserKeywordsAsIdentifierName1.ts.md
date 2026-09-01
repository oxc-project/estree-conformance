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
            "name": "big",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "break",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 15,
                  "end": 20
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 23,
                  "end": 24
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 15,
                "end": 24
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "super",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 34
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 37,
                  "end": 38
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 29,
                "end": 38
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 48
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 51,
                  "end": 52
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 43,
                "end": 52
              }
            ],
            "start": 10,
            "end": 54
          },
          "definite": false,
          "start": 4,
          "end": 54
        }
      ],
      "declare": false,
      "start": 0,
      "end": 54
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 54
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
    "value": "big",
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
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "break",
    "start": 15,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "super",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 43,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  }
]
```
