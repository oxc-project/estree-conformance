__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 10,
                "end": 12
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null,
                "start": 13,
                "end": 18
              },
              "optional": false,
              "computed": false,
              "start": 10,
              "end": 18
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 19,
                "end": 21
              }
            ],
            "optional": false,
            "start": 10,
            "end": 22
          },
          "definite": false,
          "start": 6,
          "end": 22
        }
      ],
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "TSNonNullExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 25
          },
          "start": 24,
          "end": 26
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 32,
            "end": 33
          },
          "optional": false,
          "computed": true,
          "start": 30,
          "end": 34
        },
        "start": 24,
        "end": 34
      },
      "directive": null,
      "start": 24,
      "end": 35
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "ChainExpression",
          "expression": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 37
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 40,
                "end": 41
              },
              "optional": true,
              "computed": true,
              "start": 36,
              "end": 42
            },
            "start": 36,
            "end": 43
          },
          "start": 36,
          "end": 43
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 49,
            "end": 50
          },
          "optional": false,
          "computed": true,
          "start": 47,
          "end": 51
        },
        "start": 36,
        "end": 51
      },
      "directive": null,
      "start": 36,
      "end": 52
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "String",
    "value": "''",
    "start": 10,
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
    "value": "match",
    "start": 13,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "String",
    "value": "''",
    "start": 19,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 27,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 31,
    "end": 32
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 37,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 39,
    "end": 40
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 44,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 48,
    "end": 49
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  }
]
```
