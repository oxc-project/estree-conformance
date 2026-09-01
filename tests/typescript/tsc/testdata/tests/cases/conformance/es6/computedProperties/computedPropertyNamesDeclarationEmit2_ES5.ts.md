__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 22,
                "end": 24
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 27,
                "end": 29
              },
              "start": 22,
              "end": 29
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 33,
                "end": 36
              },
              "expression": false,
              "start": 30,
              "end": 36
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 36
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 53,
                "end": 55
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 58,
                "end": 60
              },
              "start": 53,
              "end": 60
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 73,
                      "end": 74
                    },
                    "start": 66,
                    "end": 75
                  }
                ],
                "start": 64,
                "end": 77
              },
              "expression": false,
              "start": 61,
              "end": 77
            },
            "kind": "get",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 41,
            "end": 77
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 94,
                "end": 96
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 99,
                "end": 101
              },
              "start": 94,
              "end": 101
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 104
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 106,
                "end": 109
              },
              "expression": false,
              "start": 102,
              "end": 109
            },
            "kind": "set",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 82,
            "end": 109
          }
        ],
        "start": 8,
        "end": 111
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 111
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 111
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 21,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 22,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 27,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 41,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 52,
    "end": 53
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 56,
    "end": 57
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 66,
    "end": 72
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 82,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 93,
    "end": 94
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 97,
    "end": 98
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  }
]
```
