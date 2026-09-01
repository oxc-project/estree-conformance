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
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1,
                "end": 4
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 6,
                "end": 9
              },
              {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 11,
                "end": 14
              }
            ],
            "start": 0,
            "end": 15
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 19
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 19
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 20,
                "end": 21
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 26
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 33
              },
              "optional": false,
              "computed": false,
              "start": 25,
              "end": 33
            },
            "id": null,
            "generator": false,
            "start": 20,
            "end": 33
          }
        ],
        "optional": false,
        "start": 0,
        "end": 34
      },
      "directive": null,
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "[",
    "start": 0,
    "end": 1
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4,
    "end": 5
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9,
    "end": 10
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 11,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 22,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  }
]
```
