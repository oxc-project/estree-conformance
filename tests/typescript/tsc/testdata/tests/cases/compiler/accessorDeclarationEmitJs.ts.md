__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 15
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 24,
                    "end": 25
                  },
                  "value": {
                    "type": "Literal",
                    "value": "value",
                    "raw": "'value'",
                    "start": 27,
                    "end": 34
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 24,
                  "end": 34
                },
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 50
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
                            "value": "value",
                            "raw": "'value'",
                            "start": 70,
                            "end": 77
                          },
                          "start": 63,
                          "end": 78
                        }
                      ],
                      "start": 53,
                      "end": 84
                    },
                    "expression": false,
                    "start": 50,
                    "end": 84
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 40,
                  "end": 84
                }
              ],
              "start": 18,
              "end": 87
            },
            "definite": false,
            "start": 13,
            "end": 87
          }
        ],
        "declare": false,
        "start": 7,
        "end": 87
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 87
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 104
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 114
                  },
                  "value": {
                    "type": "Literal",
                    "value": "value",
                    "raw": "'value'",
                    "start": 116,
                    "end": 123
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 113,
                  "end": 123
                },
                {
                  "type": "Property",
                  "kind": "set",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 139
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 141
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 143,
                      "end": 145
                    },
                    "expression": false,
                    "start": 139,
                    "end": 145
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 129,
                  "end": 145
                }
              ],
              "start": 107,
              "end": 148
            },
            "definite": false,
            "start": 102,
            "end": 148
          }
        ],
        "declare": false,
        "start": 96,
        "end": 148
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 89,
      "end": 148
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 165
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 175
                  },
                  "value": {
                    "type": "Literal",
                    "value": "value",
                    "raw": "'value'",
                    "start": 177,
                    "end": 184
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 174,
                  "end": 184
                },
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 199
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
                            "value": "value",
                            "raw": "'value'",
                            "start": 219,
                            "end": 226
                          },
                          "start": 212,
                          "end": 227
                        }
                      ],
                      "start": 202,
                      "end": 233
                    },
                    "expression": false,
                    "start": 199,
                    "end": 233
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 190,
                  "end": 233
                },
                {
                  "type": "Property",
                  "kind": "set",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 248
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 250
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 252,
                      "end": 254
                    },
                    "expression": false,
                    "start": 248,
                    "end": 254
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 239,
                  "end": 254
                }
              ],
              "start": 168,
              "end": 257
            },
            "definite": false,
            "start": 163,
            "end": 257
          }
        ],
        "declare": false,
        "start": 157,
        "end": 257
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 150,
      "end": 257
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 257
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 13,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 27,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 40,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 63,
    "end": 69
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 70,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 89,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 96,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 102,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 116,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 129,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 150,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 157,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 177,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 190,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 194,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 212,
    "end": 218
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 219,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 239,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 243,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257
  }
]
```
