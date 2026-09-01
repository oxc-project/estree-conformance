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
                "value": "logical",
                "raw": "\"logical\"",
                "start": 19,
                "end": 28
              }
            ],
            "optional": false,
            "start": 8,
            "end": 29
          },
          "definite": false,
          "start": 4,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 31,
          "end": 32
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 36,
          "end": 37
        },
        "start": 31,
        "end": 37
      },
      "directive": null,
      "start": 31,
      "end": 38
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 40
        },
        "operator": "&&",
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 44,
          "end": 46
        },
        "start": 39,
        "end": 46
      },
      "directive": null,
      "start": 39,
      "end": 47
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 48,
          "end": 49
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 54
        },
        "start": 48,
        "end": 54
      },
      "directive": null,
      "start": 48,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 57
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 62
        },
        "start": 56,
        "end": 62
      },
      "directive": null,
      "start": 56,
      "end": 63
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 65
        },
        "operator": "||",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 69,
          "end": 70
        },
        "start": 64,
        "end": 70
      },
      "directive": null,
      "start": 64,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 73,
          "end": 75
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 80,
          "end": 81
        },
        "start": 72,
        "end": 81
      },
      "directive": null,
      "start": 72,
      "end": 82
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 82
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
    "value": "\"logical\"",
    "start": 19,
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
    "type": "Identifier",
    "value": "s",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 33,
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
    "value": "&&",
    "start": 41,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 50,
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
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 58,
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
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 66,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 77,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  }
]
```
