__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "model",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 5
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rotate",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 12
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 12
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 13,
            "end": 14
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "rotateY",
                "optional": false,
                "typeAnnotation": null,
                "start": 16,
                "end": 23
              },
              "operator": "*",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 30
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PI",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 33
                },
                "optional": false,
                "computed": false,
                "start": 26,
                "end": 33
              },
              "start": 16,
              "end": 33
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": 180,
              "raw": "180",
              "start": 36,
              "end": 39
            },
            "start": 16,
            "end": 39
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "rotateZ",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 48
              },
              "operator": "*",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 55
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PI",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 58
                },
                "optional": false,
                "computed": false,
                "start": 51,
                "end": 58
              },
              "start": 41,
              "end": 58
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": 180,
              "raw": "180",
              "start": 61,
              "end": 64
            },
            "start": 41,
            "end": 64
          }
        ],
        "optional": false,
        "start": 0,
        "end": 65
      },
      "directive": null,
      "start": 0,
      "end": 66
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 66
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "model",
    "start": 0,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "rotate",
    "start": 6,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "rotateY",
    "start": 16,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 31,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 34,
    "end": 35
  },
  {
    "type": "Numeric",
    "value": "180",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "rotateZ",
    "start": 41,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 56,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 59,
    "end": 60
  },
  {
    "type": "Numeric",
    "value": "180",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  }
]
```
