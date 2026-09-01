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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 11,
            "end": 17
          }
        ],
        "start": 9,
        "end": 17
      },
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 25
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 38
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "INCREMENT",
                      "raw": "\"INCREMENT\"",
                      "start": 40,
                      "end": 51
                    },
                    "start": 40,
                    "end": 51
                  },
                  "start": 38,
                  "end": 51
                },
                "accessibility": null,
                "static": false,
                "start": 34,
                "end": 51
              }
            ],
            "start": 32,
            "end": 53
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 64
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "DECREMENT",
                      "raw": "\"DECREMENT\"",
                      "start": 66,
                      "end": 77
                    },
                    "start": 66,
                    "end": 77
                  },
                  "start": 64,
                  "end": 77
                },
                "accessibility": null,
                "static": false,
                "start": 60,
                "end": 77
              }
            ],
            "start": 58,
            "end": 79
          }
        ],
        "start": 30,
        "end": 79
      },
      "declare": false,
      "start": 19,
      "end": 80
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 88
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 94,
                  "end": 95
                },
                "start": 94,
                "end": 95
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 98,
                  "end": 99
                },
                "start": 98,
                "end": 99
              }
            ],
            "start": 92,
            "end": 99
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 103,
                  "end": 108
                },
                "start": 103,
                "end": 108
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 111,
                  "end": 116
                },
                "start": 111,
                "end": 116
              }
            ],
            "start": 101,
            "end": 116
          }
        ],
        "start": 91,
        "end": 117
      },
      "declare": false,
      "start": 82,
      "end": 118
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 132,
          "end": 133
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 169,
                "end": 170
              },
              "start": 169,
              "end": 170
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 203,
                "end": 204
              },
              "start": 203,
              "end": 204
            }
          ],
          "start": 154,
          "end": 204
        },
        "declare": false,
        "start": 127,
        "end": 219
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 120,
      "end": 219
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 219
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 19,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 24,
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
    "value": "|",
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
    "type": "Identifier",
    "value": "type",
    "start": 34,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"INCREMENT\"",
    "start": 40,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "String",
    "value": "\"DECREMENT\"",
    "start": 66,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 82,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 92,
    "end": 93
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 96,
    "end": 97
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 101,
    "end": 102
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 109,
    "end": 110
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 111,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 120,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 127,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 154,
    "end": 155
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 188,
    "end": 189
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  }
]
```
