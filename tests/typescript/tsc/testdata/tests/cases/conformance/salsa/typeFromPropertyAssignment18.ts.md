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
            "name": "GLOBSTAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 12
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 16
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "GLOBSTAR",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 25
              },
              "optional": false,
              "computed": false,
              "start": 15,
              "end": 25
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 28,
              "end": 30
            },
            "start": 15,
            "end": 30
          },
          "definite": false,
          "start": 4,
          "end": 30
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 41
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 44,
        "end": 47
      },
      "expression": false,
      "start": 31,
      "end": 47
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "GLOBSTAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 56
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 58
          },
          "optional": false,
          "computed": false,
          "start": 48,
          "end": 58
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 61,
          "end": 62
        },
        "start": 48,
        "end": 62
      },
      "directive": null,
      "start": 48,
      "end": 62
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "GLOBSTAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 73
            },
            "optional": false,
            "computed": false,
            "start": 63,
            "end": 73
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "optional": false,
          "computed": false,
          "start": 63,
          "end": 75
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 78,
          "end": 79
        },
        "start": 63,
        "end": 79
      },
      "directive": null,
      "start": 63,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "GLOBSTAR",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 89
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 91
        },
        "optional": false,
        "computed": false,
        "start": 81,
        "end": 91
      },
      "directive": null,
      "start": 81,
      "end": 91
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "GLOBSTAR",
          "optional": false,
          "typeAnnotation": null,
          "start": 92,
          "end": 100
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 102
        },
        "optional": false,
        "computed": false,
        "start": 92,
        "end": 102
      },
      "directive": null,
      "start": 92,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 104
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "GLOBSTAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 113
          },
          "optional": false,
          "computed": false,
          "start": 103,
          "end": 113
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 115
        },
        "optional": false,
        "computed": false,
        "start": 103,
        "end": 115
      },
      "directive": null,
      "start": 103,
      "end": 115
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 117
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "GLOBSTAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 126
          },
          "optional": false,
          "computed": false,
          "start": 116,
          "end": 126
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 128
        },
        "optional": false,
        "computed": false,
        "start": 116,
        "end": 128
      },
      "directive": null,
      "start": 116,
      "end": 128
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 128
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
    "value": "GLOBSTAR",
    "start": 4,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "GLOBSTAR",
    "start": 17,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 31,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "GLOBSTAR",
    "start": 48,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "GLOBSTAR",
    "start": 65,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "GLOBSTAR",
    "start": 81,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "GLOBSTAR",
    "start": 92,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "GLOBSTAR",
    "start": 105,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "GLOBSTAR",
    "start": 118,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 127,
    "end": 128
  }
]
```
