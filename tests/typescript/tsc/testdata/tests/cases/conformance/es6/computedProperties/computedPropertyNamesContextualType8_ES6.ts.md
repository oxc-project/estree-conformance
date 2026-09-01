__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  },
                  "start": 20,
                  "end": 28
                },
                "start": 19,
                "end": 28
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 31,
                "end": 38
              },
              "start": 29,
              "end": 38
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 18,
            "end": 39
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 48,
                    "end": 54
                  },
                  "start": 46,
                  "end": 54
                },
                "start": 45,
                "end": 54
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 57,
                "end": 64
              },
              "start": 55,
              "end": 64
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 44,
            "end": 65
          }
        ],
        "start": 12,
        "end": 67
      },
      "declare": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 77
                },
                "typeArguments": null,
                "start": 76,
                "end": 77
              },
              "start": 74,
              "end": 77
            },
            "start": 73,
            "end": 77
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 87,
                    "end": 89
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 90,
                    "end": 95
                  },
                  "start": 87,
                  "end": 95
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 98,
                  "end": 100
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 86,
                "end": 100
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 107,
                    "end": 109
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 110,
                    "end": 115
                  },
                  "start": 107,
                  "end": 115
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 118,
                  "end": 119
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 106,
                "end": 119
              }
            ],
            "start": 80,
            "end": 121
          },
          "definite": false,
          "start": 73,
          "end": 121
        }
      ],
      "declare": false,
      "start": 69,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 121
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 31,
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
    "value": "[",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 57,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 69,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 86,
    "end": 87
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 87,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 89,
    "end": 90
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 90,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 106,
    "end": 107
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 107,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 109,
    "end": 110
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 110,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  }
]
```
