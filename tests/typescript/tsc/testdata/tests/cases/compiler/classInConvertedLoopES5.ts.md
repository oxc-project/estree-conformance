__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "classesByRow",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 26
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 27,
                      "end": 33
                    },
                    {
                      "type": "TSObjectKeyword",
                      "start": 35,
                      "end": 41
                    }
                  ],
                  "start": 26,
                  "end": 42
                },
                "start": 20,
                "end": 42
              },
              "start": 18,
              "end": 42
            },
            "start": 6,
            "end": 42
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 45,
            "end": 47
          },
          "definite": false,
          "start": 6,
          "end": 47
        }
      ],
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "row",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 63
            },
            "init": null,
            "definite": false,
            "start": 60,
            "end": 63
          }
        ],
        "declare": false,
        "start": 54,
        "end": 63
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": "1",
            "raw": "'1'",
            "start": 68,
            "end": 71
          },
          {
            "type": "Literal",
            "value": "2",
            "raw": "'2'",
            "start": 73,
            "end": 76
          },
          {
            "type": "Literal",
            "value": "3",
            "raw": "'3'",
            "start": 78,
            "end": 81
          },
          {
            "type": "Literal",
            "value": "4",
            "raw": "'4'",
            "start": 83,
            "end": 86
          },
          {
            "type": "Literal",
            "value": "5",
            "raw": "'5'",
            "start": 88,
            "end": 91
          }
        ],
        "start": 67,
        "end": 92
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "RowClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 112
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
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "row",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 122
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "row",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 128
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 119,
                  "end": 129
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "factory",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 148
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RowClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 169
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 157,
                      "end": 171
                    },
                    "id": null,
                    "generator": false,
                    "start": 151,
                    "end": 171
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 134,
                  "end": 172
                }
              ],
              "start": 113,
              "end": 176
            },
            "abstract": false,
            "declare": false,
            "start": 98,
            "end": 176
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "classesByRow",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 192
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "row",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 196
                },
                "optional": false,
                "computed": true,
                "start": 180,
                "end": 197
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "RowClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 208
              },
              "start": 180,
              "end": 208
            },
            "directive": null,
            "start": 180,
            "end": 209
          }
        ],
        "start": 94,
        "end": 211
      },
      "start": 49,
      "end": 211
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 211
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "classesByRow",
    "start": 6,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "row",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 64,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 67,
    "end": 68
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 76,
    "end": 77
  },
  {
    "type": "String",
    "value": "'3'",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "String",
    "value": "'4'",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87
  },
  {
    "type": "String",
    "value": "'5'",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 98,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "RowClass",
    "start": 104,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "row",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "row",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 134,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "factory",
    "start": 141,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 154,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 157,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "RowClass",
    "start": 161,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "classesByRow",
    "start": 180,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "row",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "RowClass",
    "start": 200,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  }
]
```
