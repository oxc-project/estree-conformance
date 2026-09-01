__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 4,
              "end": 11
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 12,
                  "end": 14
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": "./foo.ts",
                  "raw": "\"./foo.ts\"",
                  "start": 17,
                  "end": 27
                },
                "start": 12,
                "end": 27
              }
            ],
            "optional": false,
            "start": 4,
            "end": 28
          },
          "directive": null,
          "start": 4,
          "end": 29
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "ImportExpression",
            "source": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 39,
                "end": 41
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "./foo.ts",
                "raw": "\"./foo.ts\"",
                "start": 44,
                "end": 54
              },
              "start": 39,
              "end": 54
            },
            "options": null,
            "phase": null,
            "start": 32,
            "end": 55
          },
          "directive": null,
          "start": 32,
          "end": 56
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 66
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./foo.ts",
                "raw": "\"./foo.ts\"",
                "start": 67,
                "end": 77
              }
            ],
            "optional": false,
            "start": 59,
            "end": 78
          },
          "directive": null,
          "start": 59,
          "end": 79
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./foo.ts",
              "raw": "\"./foo.ts\"",
              "start": 89,
              "end": 99
            },
            "options": null,
            "phase": null,
            "start": 82,
            "end": 100
          },
          "directive": null,
          "start": 82,
          "end": 101
        }
      ],
      "start": 0,
      "end": 103
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 0,
    "end": 1
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 4,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 12,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 15,
    "end": 16
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 17,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 39,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 42,
    "end": 43
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 44,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 67,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 89,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "ImportExpression",
            "source": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 11,
                "end": 13
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "./foo.ts",
                "raw": "\"./foo.ts\"",
                "start": 16,
                "end": 26
              },
              "start": 11,
              "end": 26
            },
            "options": null,
            "phase": null,
            "start": 4,
            "end": 27
          },
          "directive": null,
          "start": 4,
          "end": 28
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./foo.ts",
              "raw": "\"./foo.ts\"",
              "start": 38,
              "end": 48
            },
            "options": null,
            "phase": null,
            "start": 31,
            "end": 49
          },
          "directive": null,
          "start": 31,
          "end": 50
        }
      ],
      "start": 0,
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
    "type": "Punctuator",
    "value": "{",
    "start": 0,
    "end": 1
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 11,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 14,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 16,
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
    "type": "Keyword",
    "value": "import",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 38,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  }
]
```
