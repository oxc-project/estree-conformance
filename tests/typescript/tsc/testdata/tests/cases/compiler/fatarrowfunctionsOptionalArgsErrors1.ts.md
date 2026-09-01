__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg1",
            "optional": true,
            "typeAnnotation": null,
            "start": 1,
            "end": 6
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 12
          }
        ],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 101,
          "raw": "101",
          "start": 17,
          "end": 20
        },
        "id": null,
        "generator": false,
        "start": 0,
        "end": 20
      },
      "directive": null,
      "start": 0,
      "end": 21
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 29
            },
            "optional": true,
            "typeAnnotation": null,
            "value": null,
            "start": 23,
            "end": 30
          }
        ],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 102,
          "raw": "102",
          "start": 35,
          "end": 38
        },
        "id": null,
        "generator": false,
        "start": 22,
        "end": 38
      },
      "directive": null,
      "start": 22,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 47
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null,
            "start": 41,
            "end": 47
          }
        ],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 103,
          "raw": "103",
          "start": 52,
          "end": 55
        },
        "id": null,
        "generator": false,
        "start": 40,
        "end": 55
      },
      "directive": null,
      "start": 40,
      "end": 56
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 64
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 65,
                  "end": 71
                },
                "start": 65,
                "end": 74
              },
              "start": 64,
              "end": 74
            },
            "value": null,
            "start": 58,
            "end": 79
          }
        ],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 104,
          "raw": "104",
          "start": 84,
          "end": 87
        },
        "id": null,
        "generator": false,
        "start": 57,
        "end": 87
      },
      "directive": null,
      "start": 57,
      "end": 88
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg1",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 157
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 160,
              "end": 161
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 161
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 167
          }
        ],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 172,
          "end": 173
        },
        "id": null,
        "generator": false,
        "start": 152,
        "end": 173
      },
      "directive": null,
      "start": 152,
      "end": 174
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 175
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "(",
    "start": 0,
    "end": 1
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 1,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 8,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 14,
    "end": 16
  },
  {
    "type": "Numeric",
    "value": "101",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 23,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 32,
    "end": 34
  },
  {
    "type": "Numeric",
    "value": "102",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 41,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 49,
    "end": 51
  },
  {
    "type": "Numeric",
    "value": "103",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 58,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 81,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "104",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 163,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 169,
    "end": 171
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  }
]
```
