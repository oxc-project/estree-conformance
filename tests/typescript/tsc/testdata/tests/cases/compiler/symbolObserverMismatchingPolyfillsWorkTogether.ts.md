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
        "name": "SymbolConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 27
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "observer",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 53,
                "end": 59
              },
              "start": 51,
              "end": 59
            },
            "accessibility": null,
            "static": false,
            "start": 34,
            "end": 60
          }
        ],
        "start": 28,
        "end": 62
      },
      "declare": false,
      "start": 0,
      "end": 62
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SymbolConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 90
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "observer",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 114
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 123,
                  "end": 129
                },
                "start": 116,
                "end": 129
              },
              "start": 114,
              "end": 129
            },
            "accessibility": null,
            "static": false,
            "start": 97,
            "end": 130
          }
        ],
        "start": 91,
        "end": 132
      },
      "declare": false,
      "start": 63,
      "end": 132
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 143
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 159
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "observer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 168
                  },
                  "optional": false,
                  "computed": false,
                  "start": 153,
                  "end": 168
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 171,
                  "end": 172
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 152,
                "end": 172
              }
            ],
            "start": 146,
            "end": 174
          },
          "definite": false,
          "start": 140,
          "end": 174
        }
      ],
      "declare": false,
      "start": 134,
      "end": 175
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
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "SymbolConstructor",
    "start": 10,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 34,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "observer",
    "start": 43,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 63,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "SymbolConstructor",
    "start": 73,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 97,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "observer",
    "start": 106,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 116,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 140,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "observer",
    "start": 160,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
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
