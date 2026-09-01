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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 8,
                "end": 14
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "for",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 18
              },
              "optional": false,
              "computed": false,
              "start": 8,
              "end": 18
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "shift",
                "raw": "\"shift\"",
                "start": 19,
                "end": 26
              }
            ],
            "optional": false,
            "start": 8,
            "end": 27
          },
          "definite": false,
          "start": 4,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 29,
          "end": 30
        },
        "operator": "<<",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 35
        },
        "start": 29,
        "end": 35
      },
      "directive": null,
      "start": 29,
      "end": 36
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 38
        },
        "operator": "<<",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 42,
          "end": 43
        },
        "start": 37,
        "end": 43
      },
      "directive": null,
      "start": 37,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 46
        },
        "operator": ">>",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 51
        },
        "start": 45,
        "end": 51
      },
      "directive": null,
      "start": 45,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 54
        },
        "operator": ">>",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 58,
          "end": 59
        },
        "start": 53,
        "end": 59
      },
      "directive": null,
      "start": 53,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 62
        },
        "operator": ">>>",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 68
        },
        "start": 61,
        "end": 68
      },
      "directive": null,
      "start": 61,
      "end": 69
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 71
        },
        "operator": ">>>",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 76,
          "end": 77
        },
        "start": 70,
        "end": 77
      },
      "directive": null,
      "start": 70,
      "end": 78
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 78
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
    "value": "s",
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
    "type": "Identifier",
    "value": "Symbol",
    "start": 8,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "for",
    "start": 15,
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
    "value": "\"shift\"",
    "start": 19,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 31,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 39,
    "end": 41
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 47,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 55,
    "end": 57
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 72,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  }
]
```
