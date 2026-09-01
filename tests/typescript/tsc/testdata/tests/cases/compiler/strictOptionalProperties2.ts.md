__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 29
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 34,
                "end": 35
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 47,
                      "end": 56
                    }
                  ],
                  "start": 38,
                  "end": 56
                },
                "start": 36,
                "end": 56
              },
              "accessibility": null,
              "static": false,
              "start": 34,
              "end": 56
            }
          ],
          "start": 32,
          "end": 58
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 69,
                "end": 70
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 73,
                  "end": 79
                },
                "start": 71,
                "end": 79
              },
              "accessibility": null,
              "static": false,
              "start": 69,
              "end": 79
            }
          ],
          "start": 67,
          "end": 81
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 84,
            "end": 88
          },
          "start": 84,
          "end": 88
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 91,
            "end": 96
          },
          "start": 91,
          "end": 96
        },
        "start": 32,
        "end": 96
      },
      "declare": false,
      "start": 22,
      "end": 97
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 115
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSOptionalType",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 120,
                    "end": 126
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 129,
                    "end": 138
                  }
                ],
                "start": 120,
                "end": 138
              },
              "start": 119,
              "end": 140
            }
          ],
          "start": 118,
          "end": 141
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSOptionalType",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 151,
                "end": 157
              },
              "start": 151,
              "end": 158
            }
          ],
          "start": 150,
          "end": 159
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 162,
            "end": 166
          },
          "start": 162,
          "end": 166
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 169,
            "end": 174
          },
          "start": 169,
          "end": 174
        },
        "start": 118,
        "end": 174
      },
      "declare": false,
      "start": 108,
      "end": 175
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 185
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 27,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 47,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 82,
    "end": 83
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 91,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 108,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 129,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 142,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 160,
    "end": 161
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 169,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  }
]
```
