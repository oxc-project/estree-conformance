__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 33
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 37,
                    "end": 43
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 46,
                    "end": 55
                  }
                ],
                "start": 37,
                "end": 55
              },
              "start": 35,
              "end": 55
            },
            "start": 34,
            "end": 55
          },
          "right": {
            "type": "ConditionalExpression",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 59
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 62,
                "end": 63
              },
              "start": 58,
              "end": 63
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "alternate": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 70,
              "end": 71
            },
            "start": 58,
            "end": 71
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 71
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 73,
        "end": 76
      },
      "expression": false,
      "start": 21,
      "end": 76
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 110
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 115,
                "end": 121
              },
              "start": 113,
              "end": 121
            },
            "start": 111,
            "end": 121
          },
          "right": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "someCondition",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 137
            },
            "consequent": {
              "type": "Literal",
              "value": "value1",
              "raw": "'value1'",
              "start": 140,
              "end": 148
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 152
            },
            "start": 124,
            "end": 152
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 152
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 154,
        "end": 157
      },
      "expression": false,
      "start": 98,
      "end": 157
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 157
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 21,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 46,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
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
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 98,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "someCondition",
    "start": 124,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 138,
    "end": 139
  },
  {
    "type": "String",
    "value": "'value1'",
    "start": 140,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  }
]
```
