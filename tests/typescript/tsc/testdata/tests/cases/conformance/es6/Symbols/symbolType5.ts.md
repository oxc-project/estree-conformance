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
                "value": "multiply",
                "raw": "\"multiply\"",
                "start": 19,
                "end": 29
              }
            ],
            "optional": false,
            "start": 8,
            "end": 30
          },
          "definite": false,
          "start": 4,
          "end": 30
        }
      ],
      "declare": false,
      "start": 0,
      "end": 31
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
          "start": 32,
          "end": 33
        },
        "operator": "*",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 36,
          "end": 37
        },
        "start": 32,
        "end": 37
      },
      "directive": null,
      "start": 32,
      "end": 38
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
          "start": 39,
          "end": 40
        },
        "operator": "/",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 44
        },
        "start": 39,
        "end": 44
      },
      "directive": null,
      "start": 39,
      "end": 45
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
          "start": 46,
          "end": 47
        },
        "operator": "%",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 51
        },
        "start": 46,
        "end": 51
      },
      "directive": null,
      "start": 46,
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
          "start": 54,
          "end": 55
        },
        "operator": "*",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 58,
          "end": 59
        },
        "start": 54,
        "end": 59
      },
      "directive": null,
      "start": 54,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 61,
          "end": 62
        },
        "operator": "/",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 66
        },
        "start": 61,
        "end": 66
      },
      "directive": null,
      "start": 61,
      "end": 67
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 67
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
    "value": "\"multiply\"",
    "start": 19,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 48,
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
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 56,
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
    "type": "Numeric",
    "value": "0",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  }
]
```
