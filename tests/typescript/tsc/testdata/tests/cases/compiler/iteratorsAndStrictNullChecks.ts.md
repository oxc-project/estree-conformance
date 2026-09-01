__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "init": null,
            "definite": false,
            "start": 22,
            "end": 23
          }
        ],
        "declare": false,
        "start": 16,
        "end": 23
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 28,
            "end": 31
          },
          {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 33,
            "end": 36
          }
        ],
        "start": 27,
        "end": 37
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 46
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substring",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 56
              },
              "optional": false,
              "computed": false,
              "start": 45,
              "end": 56
            },
            "directive": null,
            "start": 45,
            "end": 57
          }
        ],
        "start": 39,
        "end": 59
      },
      "start": 11,
      "end": 59
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "xs",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 79
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 83,
                "end": 84
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 86,
                "end": 87
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 89,
                "end": 90
              }
            ],
            "start": 82,
            "end": 91
          },
          "definite": false,
          "start": 77,
          "end": 91
        }
      ],
      "declare": false,
      "start": 71,
      "end": 92
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ys",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 101
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 105,
                "end": 106
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 108,
                "end": 109
              }
            ],
            "start": 104,
            "end": 110
          },
          "definite": false,
          "start": 99,
          "end": 110
        }
      ],
      "declare": false,
      "start": 93,
      "end": 111
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "xs",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 114
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 119
          },
          "optional": false,
          "computed": false,
          "start": 112,
          "end": 119
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ys",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 125
            },
            "start": 120,
            "end": 125
          }
        ],
        "optional": false,
        "start": 112,
        "end": 126
      },
      "directive": null,
      "start": 112,
      "end": 127
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 127
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 11,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 16,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 24,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 27,
    "end": 28
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "substring",
    "start": 47,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 71,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "xs",
    "start": 77,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 82,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 93,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "ys",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 104,
    "end": 105
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "xs",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 115,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "ys",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  }
]
```
