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
        "name": "FunctionType",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 17
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 26,
            "end": 29
          },
          "start": 23,
          "end": 29
        },
        "start": 20,
        "end": 29
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DoesntWork",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 46
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 52
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 54,
                    "end": 60
                  },
                  "start": 52,
                  "end": 60
                },
                "accessibility": null,
                "static": false,
                "start": 51,
                "end": 61
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 63
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 65,
                    "end": 71
                  },
                  "start": 63,
                  "end": 71
                },
                "accessibility": null,
                "static": false,
                "start": 62,
                "end": 71
              }
            ],
            "start": 49,
            "end": 73
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionType",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 88
            },
            "typeArguments": null,
            "start": 76,
            "end": 88
          }
        ],
        "start": 49,
        "end": 88
      },
      "declare": false,
      "start": 31,
      "end": 89
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "doesntWork",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DoesntWork",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 117
                },
                "typeArguments": null,
                "start": 107,
                "end": 117
              },
              "start": 105,
              "end": 117
            },
            "start": 95,
            "end": 117
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 125,
                  "end": 126
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 122,
                "end": 126
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 129
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 131,
                  "end": 132
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 128,
                "end": 132
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 135
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 137,
                  "end": 138
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 134,
                "end": 138
              }
            ],
            "start": 120,
            "end": 140
          },
          "definite": false,
          "start": 95,
          "end": 140
        }
      ],
      "declare": false,
      "start": 91,
      "end": 140
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 140
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
    "value": "FunctionType",
    "start": 5,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 23,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 26,
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
    "value": "type",
    "start": 31,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "DoesntWork",
    "start": 36,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "FunctionType",
    "start": 76,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 91,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "doesntWork",
    "start": 95,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "DoesntWork",
    "start": 107,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  }
]
```
