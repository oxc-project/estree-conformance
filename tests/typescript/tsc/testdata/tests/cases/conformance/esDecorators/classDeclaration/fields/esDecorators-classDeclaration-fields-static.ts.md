__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
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
            "name": "field3",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 35
          },
          "init": {
            "type": "Literal",
            "value": "field3",
            "raw": "\"field3\"",
            "start": 38,
            "end": 46
          },
          "definite": false,
          "start": 29,
          "end": 46
        }
      ],
      "declare": false,
      "start": 23,
      "end": 47
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 56
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 67
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 68,
                      "end": 69
                    }
                  ],
                  "optional": false,
                  "start": 64,
                  "end": 70
                },
                "start": 63,
                "end": 70
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field1",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 84
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 87,
              "end": 88
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 63,
            "end": 89
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 98
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 99,
                      "end": 100
                    }
                  ],
                  "optional": false,
                  "start": 95,
                  "end": 101
                },
                "start": 94,
                "end": 101
              }
            ],
            "key": {
              "type": "Literal",
              "value": "field2",
              "raw": "\"field2\"",
              "start": 110,
              "end": 118
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 122,
              "end": 123
            },
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 94,
            "end": 124
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 130,
                    "end": 133
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 134,
                      "end": 135
                    }
                  ],
                  "optional": false,
                  "start": 130,
                  "end": 136
                },
                "start": 129,
                "end": 136
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field3",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 151
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 155,
              "end": 156
            },
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 129,
            "end": 157
          }
        ],
        "start": 57,
        "end": 159
      },
      "abstract": false,
      "declare": false,
      "start": 49,
      "end": 159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 159
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "any",
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
    "type": "Keyword",
    "value": "const",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "field3",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "String",
    "value": "\"field3\"",
    "start": 38,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 71,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "field1",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110
  },
  {
    "type": "String",
    "value": "\"field2\"",
    "start": 110,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "field3",
    "start": 145,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  }
]
```
